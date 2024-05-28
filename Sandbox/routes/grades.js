import express from "express";
import Learners from "../Models/Learners.js";

const router = new express.Router();

// Get a learner and grades by id
router.get("/:id", async (req, res) => {
  try {
    const query = await Learners.findById(req.params.id);
    res.send(query);
  } catch (error) {
    console.log("error");
  }
});

// Getting all learners and grades
router.get("/", async (req, res) => {
  try {
    const query = await Learners.find().toArray();
    res.send(query);
  } catch (error) {
    console.log("error");
  }
});

// Create a single learner and grades entry
router.post("/", async (req, res) => {
  try {
    const learner = await Learners.create(req.body);
    res.send(learner);
  } catch (error) {
    console.log(error);
  }
});

// Put /user/:id Updates a grade by id
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await Learners.findByIdAndUpdate(
      req.params.id,
      res.body,
      { new: true }
    );
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.send({ error: "Error, invalid data" });
  }
});

// Delete/user/:id Delete a user by id
router.delete("/:id", async (req, res) => {
  try {
    const result = await Learners.findByIdAndDelete(req.params.id);
    res.send({
      deletedUser: deletedUser,
      message: "User and grades deleted!",
    });
  } catch (error) {
    console.log(error);
    res.send({ error: "Error, invalid data" });
  }
});

export default router;
