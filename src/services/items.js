import { checkError, client } from './client';

export async function getListItems() {
  const response = await client.from('shopping_list').select();
  // this will only grab items that belong to this user thanks to RLS and user_id property

  return checkError(response);
}

export async function createListItem(name, qty) {
  const response = await client.from('shopping_list').insert([{ name, qty }]).single(); // because of RLS and our default values, we add user_id for free

  return checkError(response);
}

// i want to set bought:true for this particular item
// how do i refer to this particular item?
// i use its id. Ids are unique. There is no way to accidentally update the wrong thing if you supply this unique id to supabase
export async function toggleListItem({ id, purchased }) {
  // sets a given list item's bought property to true
  const response = await client
    .from('shopping_list')
    .update({ purchased: !purchased })
    .match({ id })
    .single();

  return checkError(response);
}
