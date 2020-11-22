const { dataFake: { FeedBackResponseFake } } = require("../utils");


const getFeed = (req, res) => {
    const skip = req.query.page || 0;
    const limit = 3;
    const start = (skip) * limit;
    const result = (FeedBackResponseFake.content.slice()).splice(start, limit);
    return res.status(200).send({...FeedBackResponseFake, content: result, number: Number(skip) });
};

const getFeedById = (req, res) => {
    const { id } = req.params;
    const result = FeedBackResponseFake.content.filter((e) => e.feedbackItemId === Number(id));
    return res.status(200).send(result);
}



module.exports = {
    getFeed,
    getFeedById
}