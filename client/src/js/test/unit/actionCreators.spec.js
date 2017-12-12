import nock from 'nock';
import faker from 'faker';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import * as actionCreators from './../../../js/store/actions/actionCreators';

const globalMock = {
  apiUrl: 'http://localhost:4080'
};

describe('actionCreators', () => {
  context('actionCreators.getRecipesCatalog', () => {
    beforeEach(() => {
      globalMock.recipeStub = () => ({
        id: faker.random.uuid(),
        title: faker.lorem.sentence(),
        userId: faker.random.uuid(),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.imageUrl(),
        timeToCook: faker.random.number(),
        ingredients: JSON.stringify([faker.lorem.sentence(), faker.lorem.sentence()]),
        procedure: JSON.stringify([faker.lorem.sentence(), faker.lorem.sentence()]),
        User: {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.paragraph()
        },
        upvotersIds: [faker.random.uuid(), faker.random.uuid()],
        favoritersIds: [faker.random.uuid()],
        downvotersIds: [faker.random.uuid()]
      });

      globalMock.recipe1 = globalMock.recipeStub();
      globalMock.recipe2 = globalMock.recipeStub();

      nock(globalMock.apiUrl).get('/recipes').reply(200, {
        status: 'success',
        data: {
          recipes: {
            recipes: [{
              ...globalMock.recipe1
            }, {
              ...globalMock.recipe2
            }],
            paginationMeta: {}
          }
        }
      });

      globalMock.store = configureStore([thunk.withExtraArgument(globalMock.apiUrl)])(() => ({
        routing: {
          locationBeforeTransitions: {
            search: ''
          }
        },
        recipes: []
      }));
    });
    it('Should dispatch NEW_RECIPE_CREATED action to store when called', async () => {
      const { getRecipesCatalog } = actionCreators;

      await globalMock.store.dispatch(getRecipesCatalog());
      const storeActions = globalMock.store.getActions();

      expect(storeActions[0].type).to.equal('NEW_RECIPE_CREATED');
      expect(storeActions[0].payload.title).to.equal(globalMock.recipe1.title);
      expect(storeActions[1].type).to.equal('NEW_RECIPE_CREATED');
      expect(storeActions[1].payload.title).to.equal(globalMock.recipe2.title);
    });

    
  });
});
