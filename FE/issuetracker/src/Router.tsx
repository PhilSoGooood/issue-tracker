import IssueList from 'components/IssueList';
import Login from 'components/Login';
import { Route, Routes } from 'react-router-dom';
import Issue from 'components/Issue';
import NewIssue from 'components/newIssue';
import LabelPage from 'components/LabelPage';
import MileStonePage from 'components/milestone';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/issueList" element={<IssueList />} />
      <Route path="/newIssue" element={<NewIssue />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/label" element={<LabelPage />} />
      <Route path="/milestone" element={<MileStonePage />} />
    </Routes>
  );
}

export default Router;
