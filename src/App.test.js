import { render, screen } from '@testing-library/react';
import App from './App';

import { DataStore } from '@aws-amplify/datastore';
import { Configuration } from './models';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('models - Configuration save', async () => {
  let o = await DataStore.save(
    new Configuration({
		"key": "Lorem ipsum dolor sit amet",
		"value_float": 123.45,
		"value_string": "Lorem ipsum dolor sit amet"
	})
  );
  expect(o).not.toBeNull();
});

test('models - Configuration query and update', async () => {

    let query_obj = new Configuration({
		"key": "Lorem ipsum dolor sit amet"
	})

    const models = await DataStore.query(Configuration);
    console.log(models);
    let obj = models[0]
    expect(obj.value_float).toEqual(123.45)

    /* Models in DataStore are immutable. To update a record you must use the copyOf function
     to apply updates to the item’s fields rather than mutating the instance directly */
    let new_obj = await DataStore.save(Configuration.copyOf(obj, item => {
        // Update the values on {item} variable to update DataStore entry
        item.value_string = "xpto";
    }));
    expect(new_obj.value_string).toEqual("xpto");

});

test('models - Configuration query and delete', async () => {

    let query_obj = new Configuration({
		"key": "Lorem ipsum dolor sit amet"
	})

    let models = await DataStore.query(Configuration);
    console.log(models);
    let obj = models[0]
    expect(obj.value_float).toEqual(123.45)
    await DataStore.delete(obj);
    models = await DataStore.query(Configuration);
    expect(models.length).toEqual(0);


});
