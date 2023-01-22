import React from 'react';
import { ListItemContainer, ListItemTitle, ListItemValue } from './styles';

interface IListItemProps {
  title: string;
  value: string | number;
  topBorder?: boolean;
  borderTopColor?: string;
}

const ListItem: React.FC<IListItemProps> = ({
  title,
  value,
  topBorder,
  borderTopColor,
}) => {
  return (
    <ListItemContainer topBorder={topBorder} borderTopColor={borderTopColor}>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemValue>{value}</ListItemValue>
    </ListItemContainer>
  );
};

export default ListItem;
