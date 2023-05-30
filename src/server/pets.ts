import { Factory, Model, Server, createServer } from 'miragejs';
import pets from '../services/pets.json';
import { Pet } from '../@types/pet';

//createServer({
//routes() {
//this.namespace = '/api/';

//this.get('/pets', () => {
//return pets;
//});

//this.get('pets/:id', (req) => {
//const id = req.params.id;
//});
//},
//});

const images = [
  'https://img.freepik.com/fotos-gratis/lindo-cao-pastor-posando-isolado-sobre-fundo-branco_155003-46179.jpg?w=1060&t=st=1683754730~exp=1683755330~hmac=5a376c0dcda9540418600b7a13baac94cf774a5ede27cf6b0a21b584722fb056',

  'https://img.freepik.com/fotos-gratis/retrato-de-estudio-de-um-cachorro-fofo-pug-de-raca_613910-103.jpg?w=996&t=st=1683754779~exp=1683755379~hmac=11d932ae434e0f169545c03067d2441cff26dd49d1fd78d8a7a67ce542296680',

  'https://img.freepik.com/fotos-gratis/close-de-um-gatinho-ruivo-fofo-olhando-para-a-camera-isolada-em-uma-parede-branca_181624-45452.jpg?w=1380&t=st=1683754585~exp=1683755185~hmac=54b13990bb4df8410f149e8480967248ff5e02a6aa1cf98c28051119a0c36c80',

  'https://img.freepik.com/psd-premium/cao-sorrindo_35691-3048.jpg?w=1380',

  'https://img.freepik.com/psd-gratuitas/belo-retrato-de-gato-isolado_23-2150186034.jpg?w=1380&t=st=1683754548~exp=1683755148~hmac=de16b99e3ab37ad399e2cb33cb9373761bb9bfdb81d4fde1fa51a4d0e1eb63fb',

  'https://img.freepik.com/fotos-premium/retrato-de-um-rottweiler-do-puro-sangue-com-tanga-vermelha_85574-12161.jpg?w=900',

  'https://img.freepik.com/fotos-gratis/gato-branco-no-jardim_1150-43949.jpg?w=1380&t=st=1683754642~exp=1683755242~hmac=015fd022866e2c7456e9e97343509f5a234aa487cf2e25de9108481aa9641329',

  'https://img.freepik.com/fotos-gratis/adoravel-cachorrinho-golden-retriever-fofo-mostrando-a-lingua_181624-24612.jpg?w=1060&t=st=1683754940~exp=1683755540~hmac=d5bcd5dbed1879700c2bb795ee6789810fe426a81095065c5319776d8d335596',

  'https://img.freepik.com/fotos-premium/cao-bonito-com-gravata-borboleta-verde-perto-da-parede-de-cor-comemoracao-do-dia-de-sao-patricio_392895-7438.jpg?w=1380',

  'https://img.freepik.com/fotos-gratis/retriever-dourado-bonito_144627-26658.jpg?w=740&t=st=1683754968~exp=1683755568~hmac=dfc0eade2695d41996ea1b4fe592dc055dbf3899e7e3fa9cafbb62e3bbcfdc63',
];

// const PetFactory = Factory.extend<Pet>({});

createServer({
  models: {
    pet: Model,
  },
  factories: {
    pet: Factory,
  },

  routes() {
    this.namespace = '/api/';

    this.get('/pets', (schema, request) => {
      return schema.all('pet');
    });

    this.get('/pet/:id', (schema, request) => {
      const { id } = request.params;

      return schema.find('pet', id);
    });
  },
  seeds(server) {
    server.create('pet', {
      id: '1',
      name: 'Max',
      species: 'Cachorro',
      size: 'grande',
      sex: 'macho',
      breed: 'German Shepherd',
      age: 3,
      color: 'Black and Tan',
      animalConditions:
        'Levamos o animal ao veterinário, que confirmou que ele estava saudável, vacinado e castrado. Agora, estamos procurando um lar amoroso para esse animal que merece um ambiente seguro e confortável. Ele é um animal carinhoso e amoroso, que com certeza será um grande companheiro para a pessoa certa.',
      castrated: true,
      imageUrl:
        'https://img.freepik.com/fotos-gratis/lindo-cao-pastor-posando-isolado-sobre-fundo-branco_155003-46179.jpg?w=1060&t=st=1683754730~exp=1683755330~hmac=5a376c0dcda9540418600b7a13baac94cf774a5ede27cf6b0a21b584722fb056',
      location: 'Belo Horizonte - Minas Gerais',
      favorite: false,
    });
    server.create('pet', {
      id: '2',
      name: 'Bella',
      species: 'Cachorro',
      size: 'pequeno',
      sex: 'fêmea',
      breed: 'Bulldoog',
      age: 2,
      color: 'Brown and White',
      animalConditions:
        'Infelizmente, depois de levar o animal ao veterinário, descobrimos que ele está doente e precisa de cuidados especiais. Estamos trabalhando com o veterinário para cuidar do animal e ajudá-lo a se recuperar completamente. Se você está interessado em adotar um animal que precisa de cuidados extras e está disposto a dedicar tempo e recursos para sua recuperação, por favor, entre em contato conosco. Juntos, podemos dar a esse animal a chance de ter uma vida feliz e saudável.',
      castrated: false,
      imageUrl:
        'https://img.freepik.com/fotos-gratis/retrato-de-estudio-de-um-cachorro-fofo-pug-de-raca_613910-103.jpg?w=996&t=st=1683754779~exp=1683755379~hmac=11d932ae434e0f169545c03067d2441cff26dd49d1fd78d8a7a67ce542296680',
      location: 'Belo Horizonte - Minas Gerais',
      favorite: false,
    });
    server.create('pet', {
      id: '3',
      name: 'Simba',
      species: 'Gato',
      size: 'pequeno',
      sex: 'macho',
      breed: 'Maine Coon',
      age: 1,
      color: 'Orange',
      animalConditions:
        'Levamos o animal ao veterinário, que confirmou que ele estava saudável, vacinado e castrado. Agora, estamos procurando um lar amoroso para esse animal que merece um ambiente seguro e confortável. Ele é um animal carinhoso e amoroso, que com certeza será um grande companheiro para a pessoa certa.',
      castrated: true,
      imageUrl:
        'https://img.freepik.com/fotos-gratis/close-de-um-gatinho-ruivo-fofo-olhando-para-a-camera-isolada-em-uma-parede-branca_181624-45452.jpg?w=1380&t=st=1683754585~exp=1683755185~hmac=54b13990bb4df8410f149e8480967248ff5e02a6aa1cf98c28051119a0c36c80',
      location: 'Belo Horizonte - Minas Gerais',
      favorite: false,
    });
    server.create('pet', {
      id: '4',
      name: 'Lucky',
      species: 'Cachorro',
      size: 'grande',
      sex: 'macho',
      breed: 'Labrador Retriever',
      age: 5,
      color: 'Yellow',
      animalConditions:
        'Infelizmente, depois de levar o animal ao veterinário, descobrimos que ele está doente e precisa de cuidados especiais. Estamos trabalhando com o veterinário para cuidar do animal e ajudá-lo a se recuperar completamente. Se você está interessado em adotar um animal que precisa de cuidados extras e está disposto a dedicar tempo e recursos para sua recuperação, por favor, entre em contato conosco. Juntos, podemos dar a esse animal a chance de ter uma vida feliz e saudável.',
      castrated: false,
      imageUrl:
        'https://img.freepik.com/psd-premium/cao-sorrindo_35691-3048.jpg?w=1380',
      location: 'Belo Horizonte - Minas Gerais',
      favorite: false,
    });
    server.create('pet', {
      id: '5',
      name: 'Smokey',
      species: 'Gato',
      size: 'pequeno',
      sex: 'macho',
      breed: 'Russian Blue',
      age: 2,
      color: 'Gray',
      animalConditions:
        'Levamos o animal ao veterinário, que confirmou que ele estava saudável, vacinado e castrado. Agora, estamos procurando um lar amoroso para esse animal que merece um ambiente seguro e confortável. Ele é um animal carinhoso e amoroso, que com certeza será um grande companheiro para a pessoa certa.',
      castrated: false,
      imageUrl:
        'https://img.freepik.com/psd-gratuitas/belo-retrato-de-gato-isolado_23-2150186034.jpg?w=1380&t=st=1683754548~exp=1683755148~hmac=de16b99e3ab37ad399e2cb33cb9373761bb9bfdb81d4fde1fa51a4d0e1eb63fb',
      location: 'Belo Horizonte - Minas Gerais',
      favorite: false,
    });
  },
});
