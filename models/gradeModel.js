export default (mongoose) => {
  const schema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error('Valor Inválido Para Nota');
      },
      lastModified: { type: Date, default: Date.now },
    },
  });

  const Grade = mongoose.model('grades', schema, 'grades');

  return Grade;
};
