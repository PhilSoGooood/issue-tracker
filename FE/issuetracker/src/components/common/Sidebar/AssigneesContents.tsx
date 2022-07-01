import { AccountType } from 'data';
import * as S from 'components/common/Sidebar/styled';
import { keyMaker } from 'utils/util';

function AssigneesContents({ assignees }: { assignees: Array<AccountType> }) {
  const assigneesContents =
    assignees[0].name !== ''
      ? assignees.map((assignee: AccountType) => {
          const key = keyMaker();
          return (
            <S.DropDownContent key={key}>
              <S.SmallAcountImg src={assignee.profileImage} />
              {assignee.name}
            </S.DropDownContent>
          );
        })
      : '';

  return <S.Status>{assigneesContents}</S.Status>;
}

export default AssigneesContents;
