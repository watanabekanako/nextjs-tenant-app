import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (resource: string, init: Object) =>
  fetch(resource, init).then((res) => res.json());

function ItemList() {
  const { data, error } = useSWR('/api/items', fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

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
          const onClickDelete = () => {
            // const newTodos = [...index];
            // newTodos.splice(index, 1);
            // alert(index);
          };
          <Link href="/">
            <a className="link">Home</a>
          </Link>;
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>
                  <Link href={`/items/${item.id}`}>{item.name}</Link>
                </td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => onClickDelete()}>
                    <Link href="/">
                      <a>[削除]</a>
                    </Link>
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemList;
