import React, {Component, ReactNode} from 'react';


/**
 * interface IListOverviewProps
 * @author Ingo Andelhofs
 */
interface IListOverviewProps {
  items: Item[]
}

export type Item = {
  name: string,
  icon: ReactNode,
};



/**
 * class ListOverview
 * @author Ingo Andelhofs
 */
class ListOverview extends Component<IListOverviewProps, any> {
  private static renderItem(item: Item): ReactNode {
    return <div key={item.name} className="item">
      {item.icon}
      <span>{item.name}</span>
    </div>;
  }

  public render(): ReactNode {
    const {items} = this.props;

    return <div className="list-overview">
      {items.map(ListOverview.renderItem)}
    </div>;
  }
}


export default ListOverview;