const mongoose = require("mongoose");

const MarkupSchema = mongoose.Schema(
  {
    textId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Text",
      required: true,
    },
    suggested: { type: Boolean, required: true },
    isEntity: { type: Boolean, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    start: {
      type: Number,
      required: false,
    },
    end: {
      type: Number,
      required: false,
    },
    entityText: { type: String, required: false }, // 实体起始/结束之间的文本
    labelId: {
      // 本体数组中元素的 UniqueId 项目
      type: String,
      ref: "Project.ontology",
      required: false, //对于开放关系注释不是必需的
    },
    source: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Markup",
      required: false,
    },
    target: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Markup",
      required: false,
    },
    labelText: {
      type: String,
      required: false,
    },
    labelStart: { type: Number, required: false },
    labelEnd: { type: Number, required: false },
  },
  { _id: true, timestamps: true }
);

module.exports = mongoose.model("Markup", MarkupSchema);
