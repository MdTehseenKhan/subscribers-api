
import mongoose from "mongoose"
const { Schema, model } = mongoose

const SubscriberSchema = new Schema({
	name: { type: String, required: true },
	channelSubscribed: { type: String, required: true },
	dateSubscribed: { type: Date, default: () => Date.now() },
	dateSubscribed: { type: Date, default: () => Date.now() },
})

const Subscriber = mongoose.models.Subscriber || model('Subscriber', SubscriberSchema)
export default Subscriber