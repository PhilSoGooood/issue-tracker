import { useGetData } from 'APIs/Api';
import * as S from 'components/IssueList/styled.index';
import * as I from 'design/icons';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { issueListState } from 'store/issueList';
import Issues from './Issues';

function IssueList() {
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useRecoilState(issueListState);
  const [dataInfo, setDataInfo] = useState({
    key: 'issueList',
    url: 'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issues?closed=false',
  });
  const { data, status } = useGetData(dataInfo.key, dataInfo.url);
  useEffect(() => {
    if (status === 'success') setState(data);
  }, [data, setState, status]);

  function toggleDropdown() {
    setIsClicked(!isClicked);
  }

  const useGetIssueIWrote = (e: React.MouseEvent<HTMLElement>) => {
    setDataInfo({
      key: 'issueListIWrote',
      url: 'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issues/created-by/1',
    });
  };
  const useGetIssueAssigned = (e: React.MouseEvent<HTMLElement>) => {
    setDataInfo({
      key: 'issueListAssigned',
      url: 'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issues/assigned-to/1',
    });
  };
  const useGetIssueIComment = (e: React.MouseEvent<HTMLElement>) => {
    setDataInfo({
      key: 'issueListIComment',
      url: 'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issues/commented-by/1',
    });
  };
  const useGetIssueClosed = (e: React.MouseEvent<HTMLElement>) => {
    setDataInfo({
      key: 'issueListIWrote',
      url: 'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issues?closed=true',
    });
  };
  return (
    <S.IssueListWrap>
      <S.IssueListTop>
        <S.FilterBar>
          <S.Filter
            onClick={() => {
              toggleDropdown();
            }}
          >
            필터
            <I.dropdownArrow />
            <S.Dropdown isClicked={isClicked}>
              <S.DropdownTitle>이슈 필터</S.DropdownTitle>
              <S.DropdownContent>
                열린 이슈
                <I.offCheckCircle />
              </S.DropdownContent>
              <S.DropdownContent onClick={useGetIssueIWrote}>
                내가 작성한 이슈
                <I.offCheckCircle />
              </S.DropdownContent>
              <S.DropdownContent onClick={useGetIssueAssigned}>
                나에게 할당된 이슈
                <I.offCheckCircle />
              </S.DropdownContent>
              <S.DropdownContent onClick={useGetIssueIComment}>
                내가 댓글을 남긴 이슈
                <I.offCheckCircle />
              </S.DropdownContent>
              <S.DropdownContent onClick={useGetIssueClosed}>
                닫힌 이슈
                <I.offCheckCircle />
              </S.DropdownContent>
            </S.Dropdown>
          </S.Filter>
          <S.SearchBar placeholder="is:issue is:open" />
        </S.FilterBar>
        <S.IssueListTopRight>
          <S.Buttons>
            <S.LabelBtn to="/label">
              <I.tag />
              <S.BtnText>레이블</S.BtnText>
              <S.BtnContentCount>(3)</S.BtnContentCount>
            </S.LabelBtn>
            <S.MileStoneBtn to="/milestone">
              <I.milestone />
              <S.BtnText>마일스톤</S.BtnText>
              <S.BtnContentCount>(2)</S.BtnContentCount>
            </S.MileStoneBtn>
          </S.Buttons>
          <S.IssueOption to="/newIssue">
            <I.plus />
            이슈 작성
          </S.IssueOption>
        </S.IssueListTopRight>
      </S.IssueListTop>
      <Issues />
    </S.IssueListWrap>
  );
}

export default IssueList;
