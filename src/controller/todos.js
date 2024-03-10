const
    todosService = require('../services/todos'),
    { extractPayload } = require('../utils/commonUtilities');

exports.getById = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.getById(payload);
        next();
    } catch (error) { next(error) }
}

exports.get = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.get(payload);
        next();
    } catch (error) { next(error) }
}

exports.add = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.add(payload);
        next();
    } catch (error) { next(error) }
}

exports.update = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.update(payload);
        next();
    } catch (error) { next(error) }
}

exports.partialUpdate = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.partialUpdate(payload);
        next();
    } catch (error) { next(error) }
}

exports.delete = async (req, res, next) => {
    try {
        const payload = extractPayload(req);
        req.response = await todosService.remove(payload);
        next();
    } catch (error) { next(error) }
}
