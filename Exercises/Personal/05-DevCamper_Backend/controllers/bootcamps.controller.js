export const getAllBootcamps = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show all bootcamps.`, hello: req.hello });
};
export const getSingleBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: `show a bootcamp.` });
};
export const createBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: `create new bootcamp.` });
};
export const updateBootcamps = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};
export const deleteBootcamps = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `delete a bootcamp ${req.params.id}` });
};
