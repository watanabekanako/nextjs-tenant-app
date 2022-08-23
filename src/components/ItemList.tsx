import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';

const fetcher = (resource: string, init: Object) =>
  fetch(resource, init).then((res) => res.json());

function ItemList() {
  const { data, error } = useSWR('/api/items', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const { mutate } = useSWRConfig();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>説明</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => {
          return (
            <tr>
              <td>{item.id}</td>
              <Link href="/items/[id].tsx">
                <td>{item.name}</td>
              </Link>
              <td>{item.description}</td>
              <button
                onClick={() => {
                  fetch(`/api/items/${item.id}`, {
                    method: 'DELETE',
                  });
                  mutate('/api/items');
                }}
              >
                [削除]
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemList;
