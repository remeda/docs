import * as React from 'react';

export interface MenuProps {
  items: Array<{
    name: string;
    category: string;
  }>;
}

export function Menu({ items }: MenuProps) {
  return (
    <div className="col-12 col-md-3 col-xl-2 sidebar">
      <div className="menu-search">
        <input type="search" className="form-control" placeholder="Search..." />
      </div>
      {items.map(item => (
        <a href={'#' + item.name} key={item.name} className="menu-link">
          <span>{item.name}</span>
          <div className=" badge badge-success">{item.category}</div>
        </a>
      ))}
    </div>
  );
}
