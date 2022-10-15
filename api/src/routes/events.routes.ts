import { Router } from "express";
import { addEvent, deleteEvent, findEvent, updateEvent, } from "../controllers/events.controllers";

const router = Router()

router.route('')
    .post(addEvent)
    .get(findEvent)
    .put(updateEvent)
    .patch(deleteEvent)
export default router;