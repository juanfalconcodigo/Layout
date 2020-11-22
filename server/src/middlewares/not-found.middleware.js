const notFound = (req, res, next) => {
    return res.status(404).json({
        ok: false,
        message: 'Resource not found'
    });
}

module.exports = notFound;