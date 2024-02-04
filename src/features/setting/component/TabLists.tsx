import { tabLists } from '@features/setting/data/tabLists';

type Props = {

}

const SettingTabLists = ({ }: Props) =>{
  return(
    <ul>
      {tabLists.map(({ id, name }) => {
        return (
          <li key={id}>
            {name}
          </li>
        )
      })}
    </ul>
  )
};

export default SettingTabLists;