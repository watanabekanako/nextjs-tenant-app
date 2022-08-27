import { useState } from 'react';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';

export default function ItemCreate({ items }: any) {
  const [nameText, setNameText] = useState();
  const onChangeNameText = (event: any) =>
    setNameText(event.target.value);

  const [descText, setDescText] = useState();
  const onChangeDescText = (event: any) =>
    setDescText(event.target.value);

  const [priceText, setPriceText] = useState();
  const onChangePriceText = (event: any) =>
    setPriceText(event.target.value);
  const onClickCreate = () => {
    return fetch(`/api/items/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameText,
        description: descText,
        price: priceText,
      }),
    }).then((res) => res.json());
  };
  return (
    <div>
      <h1>商品画面</h1>
      <table>
        <tr>
          <th>商品名</th>
          <td>
            <input
              type="text"
              name="name"
              value={nameText}
              onChange={onChangeNameText}
            ></input>
          </td>
        </tr>
        <tr>
          <th>説明</th>
          <td>
            <textarea
              name="description"
              cols={40}
              rows={4}
              value={descText}
              onChange={onChangeDescText}
            ></textarea>
          </td>
        </tr>
        <tr>
          <th>価格</th>
          <td>
            <input
              type="text"
              name="price"
              value={priceText}
              onChange={onChangePriceText}
            ></input>
          </td>
        </tr>
        <tr>
          <th>画像</th>
          <td>
            <input type="text" name="imageUrl"></input>
          </td>
        </tr>
      </table>
      <Link href="http://localhost:3000/items">
        <button onClick={() => onClickCreate()}>保存</button>
      </Link>
      <Link href="/items">
        <button>キャンセル</button>
      </Link>
    </div>
  );
}
