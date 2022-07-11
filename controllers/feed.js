const { validationResult } = require("express-validator/check");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Posts",
        content: "This is the first post!",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Keshav",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation Failed,Entered data is incorrect" });
  }
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Posts created successfully!",
    post: {
      id: new Date().toISOString,
      title: title,
      content: content,
      creator: { name: "Swati" },
      createdAt: new Date(),
    },
  });
};
("");
