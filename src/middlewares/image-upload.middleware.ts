import multer from 'multer';

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null,`${process.cwd()}/src/uploads`);
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    },
});

const upload = multer({storage});
export {upload};
