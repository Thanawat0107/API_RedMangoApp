import React, { useEffect, useState } from 'react'
import { menuItemModel } from '../../../models';

type Props = {}

export default function MenuItemList({}: Props) {
    const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

    useEffect(() => {
      fetch('http://localhost:5055/api/MenuItem')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMenuItems(data.result);
        });
    }, []);
  
    return (
      <div>
        Main Component
      </div>
    );
}