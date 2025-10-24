// src/services/course.service.js
import db from '../../database.js';

const table = 'edu_course';
const notFound = (id) => ({ ok:false, status:404, msg:`Data id ${id} tidak ditemukan` });

export async function getAll() {
  const [rows] = await db.query(`SELECT id, title, contents, created FROM ${table} ORDER BY id DESC`);
  return { ok:true, data: rows };
}

export async function getById(id) {
  const [rows] = await db.query(`SELECT id, title, contents, created FROM ${table} WHERE id = ?`, [id]);
  if (rows.length === 0) return notFound(id);
  return { ok:true, data: rows[0] };
}

export async function create(payload) {
  const { title, contents } = payload;
  const [res] = await db.query(
    `INSERT INTO ${table} (title, contents) VALUES (?, ?)`,
    [title, contents]
  );
  return getById(res.insertId);
}

// PATCH/PUT: hanya boleh ubah title/contents
export async function update(id, payload) {
  const fields = [];
  const vals = [];
  if (payload.title !== undefined) { fields.push('title = ?'); vals.push(payload.title); }
  if (payload.contents !== undefined) { fields.push('contents = ?'); vals.push(payload.contents); }

  if (fields.length === 0) return { ok:false, status:400, msg:'Tidak ada field untuk diupdate' };

  vals.push(id);
  const [res] = await db.query(`UPDATE ${table} SET ${fields.join(', ')} WHERE id = ?`, vals);
  if (res.affectedRows === 0) return notFound(id);
  return getById(id);
}

export async function remove(id) {
  const [res] = await db.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
  if (res.affectedRows === 0) return notFound(id);
  return { ok:true, msg:`Data id ${id} terhapus` };
}
