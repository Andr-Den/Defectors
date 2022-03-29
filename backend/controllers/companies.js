const Company = require('../models/company');

module.exports.getCompanies = (req, res, next) => {
  Company.find({})
    .then((company) => res.send({ data: company }))
    .catch(next);
};

module.exports.getCompany = (req, res, next) => {
  Company.findById(req.params._id)
    .then((company) => res.send({ data: company }))
    .catch(next);
};

module.exports.createCompany = (req, res, next) => {
  const {
    name,
    website,
    date,
  } = req.body;

  Company.create({
    name,
    website,
    date,
  })
    .then((company) => res.send({ data: company }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new Error('Некорректные данные'));
      } else {
        next(error);
      }
    });
};

module.exports.updateCompany = (req, res, next) => {
  Company.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .orFail(new Error('Not Found'))
    .then((company) => res.send({ data: company }))
    .catch((error) => {
      if (error.name === 'ValidationError') { next(new Error('Некорректные данные')); 
      } else if (error.message === 'Not Found') { next(new Error('Запрашиваемый пользователь не найден')); 
      } else {
        next(error);
      }
    });
};

module.exports.deleteCompany = (req, res, next) => {
  Company.findById(req.params._id)
    .orFail(new Error('Запрашиваемая карточка не найдена'))
    .then((company) => {
      return company.remove();
    })
    .then(() => res.send({ message: 'Карточка успешно удалена' }))
    .catch((error) => {
      if (error.name === 'CastError') {
        next(new Error('Некорректный id'));
      } else {
        next(error);
      }
    });
};