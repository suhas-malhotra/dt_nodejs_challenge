const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const db = client.db("suhas");
const events = db.collection("events");

module.exports.getEvent = async (req, res) => {
  if (req.query.id) {
    const queryId = req.query.id;
    const filteredEvents = await events.findOne({ _id: new ObjectId(queryId) });
    return res.status(200).json(filteredEvents);
  } else {
    const { type, limit, page } = req.query;
    if (!type || !limit || !page)
      return res.status(404).json({ msg: "Invalid Query" });
    const l = limit * page;
    const filteredEvents = await events
      .find()
      .sort({ $natural: -1 })
      .limit(l)
      .toArray();
    let arr = [];
    let k = 0;
    for (let i = 0; i < page; i++) {
      let res = [];
      for (let j = 0; j < limit; j++) {
        if (k < filteredEvents.length) res.push(filteredEvents[k]);
        k++;
      }
      if (res.length > 0) arr.push(res);
    }

    return res.status(200).json(arr);
  }
};
module.exports.insertEvent = async (req, res) => {
  const {
    name,
    files,
    tagline,
    schedule,
    description,
    moderator,
    category,
    sub_category,
    rigor_rank,
  } = req.body;

  if (
    !name ||
    !files ||
    !tagline ||
    !schedule ||
    !description ||
    !moderator ||
    !category ||
    !sub_category ||
    !rigor_rank
  ) {
    return res.status(422).json({ msg: "Send all the details" });
  }

  const data = {
    name,
    files,
    tagline,
    schedule,
    description,
    moderator,
    category,
    sub_category,
    rigor_rank,
    timestamp: new Date(),
  };
  const insertResult = await events.insertOne(data, {});

  return res.status(200).json({ msg: "Event Inserted", insertResult });
};

module.exports.deleteEvent = async (req, res) => {
  const id = req.params.id;
  await events.deleteOne({ _id: new ObjectId(id) }, (err, d) => {
    if (err) return res.status(404).json({ msg: err });
    if (d.acknowledged && d.deletedCount == 1)
      res.status(200).json({ msg: "Event Deleted" });
    else
      return res
        .status(404)
        .json({ msg: "Record doesn't exist or already deleted" }); // Use your response code
  });
};
