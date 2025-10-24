// src/controllers/course.controller.js
import * as svc from '../services/course.service.js';

const send = (res, r) => {
  if (!r.ok && r.status) return res.status(r.status).json(r);
  if (!r.ok) return res.status(400).json(r);
  return res.json(r);
};

export async function list(req, res, next) {
  try { send(res, await svc.getAll()); } catch (e) { next(e); }
}
export async function detail(req, res, next) {
  try { send(res, await svc.getById(req.params.id)); } catch (e) { next(e); }
}
export async function create(req, res, next) {
  try {
    const { title, contents } = req.body;
    if (!title || !contents) return res.status(400).json({ ok:false, msg:'title & contents wajib' });
    const r = await svc.create({ title, contents });
    res.status(201).json(r);
  } catch (e) { next(e); }
}
export async function update(req, res, next) {
  try { send(res, await svc.update(req.params.id, req.body)); } catch (e) { next(e); }
}
export async function remove(req, res, next) {
  try { send(res, await svc.remove(req.params.id)); } catch (e) { next(e); }
}
