const service = require("../services/gestion.service");

exports.create = async (req, res, next) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const result = await service.list(req.query);
    res.json(result);
  } catch (err) { next(err); }
};

exports.detail = async (req, res, next) => {
  try {
    const data = await service.detail(req.params.id);
    res.json(data);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const data = await service.update(req.params.id, req.body);
    res.json(data);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const data = await service.delete(req.params.id);
    res.json({ deleted: true, data });
  } catch (err) { next(err); }
};