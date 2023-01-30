import { useState } from 'react';
import { createListItem } from '../../services/items';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';

export default function Items() {
  // TODO -- redirect the user back to auth if there is not a current user

  return (
    <div className="container is-max-desktop">
      <div className="box m-5">
        <ItemsList />
        <ItemForm />
      </div>
    </div>
  );
}
