const mongoose = require('mongoose');
const Company = require('./models/company');

mongoose.connect('mongodb://localhost:27017/defectorsDB');

const seedCompanies = [
  {
    name: 'Decathlon',
    website: 'https://www.rbc.ru/business/29/03/2022/6242e6679a794764009f7b87',
    date: '29.03.2022',
  },
  {
    name: 'UNIQLO',
    website: 'https://vc.ru/trade/377514-uniqlo-priostanovit-rabotu-v-rossii-hotya-glava-kompanii-vystupal-protiv-etogo',
    date: '14.03.2022',
  },
  {
    name: 'McDonald’s',
    website: 'https://www.dp.ru/a/2022/03/09/V_McDonalds_zatrudnilis',
    date: '15.03.2022',
  },
  {
    name: 'H&M',
    website: 'https://profashion.ru/business/retail/h-m-group-ostanovila-prodazhi-v-rossii/',
    date: '03.03.2022',
  },
  {
    name: 'IKEA',
    website: 'https://www.ixbt.com/news/2022/03/03/ikea-prekrashaet-rabotu-v-rossii.html',
    date: '04.03.2022',
  },
  {
    name: 'Swarovski',
    website: 'https://lenta.ru/news/2022/03/04/swar/',
    date: '04.03.2022',
  },
  {
    name: 'L`Oreal',
    website: 'https://www.kommersant.ru/doc/5249930',
    date: '08.03.2022',
  },
];

const seedDB = async () => {
  await Company.deleteMany({});
  await Company.insertMany(seedCompanies);
};

seedDB().then(() => {
  mongoose.connection.close();
});
