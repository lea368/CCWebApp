const Photo = require('../models/photo');
const { google } = require('googleapis');

const getGoogleDriveClient = async () => {
  // Código para obtener el cliente de Google Drive
  // Puedes consultar la documentación oficial de Google Drive para obtener más información
};

exports.getGallery = async (req, res) => {
  const photos = await Photo.getAll();
  res.render('gallery', { photos });
};

exports.postPhoto = async (req, res) => {
  if (req.session.admin && req.file) {
    const driveClient = await getGoogleDriveClient();
    const { name, mimetype, buffer } = req.file;

    const fileMetadata = {
      name,
      mimeType: mimetype,
    };

    const media = {
      mimeType: mimetype,
      body: buffer,
    };

    const file = await driveClient.files.create({
      requestBody: fileMetadata,
      media: media,
    });

    const photoUrl = `https://drive.google.com/file/d/${file.data.id}`;
    await Photo.create(name, photoUrl);
  }
  res.redirect('/gallery');
};