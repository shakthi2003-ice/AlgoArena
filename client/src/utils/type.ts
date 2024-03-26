export interface TestcaseType {
  input: string;
  output: string;
  sample: boolean;
  explanation?: string;
}
export interface Problem {
  _id: string;
  title: string;
  desc: string;
  difficulty: string;
  whoSolved: string[];
  tags: string;
}

export interface PropblemDetailType {
  slug: string;
  input: string;
  title: string;
  output: string;
  constraints: string;
  statement: string;
  desc: string;
  difficulty: string;
  tags: string;
}

export interface Filter {
  tags: string;
  difficulty: string;
}

export interface ProblemType extends PropblemDetailType {
  testcase?: TestcaseType[];
  updatedAt: string;
  createdAt: string;
  _id: string;
  whoSolved: string[];
  createdBy: string;
  timelimit: string;
}

export interface UserType {
  _id: string;
  googleId: string;
  displayName: string;
  image: string;
  email: string;
}

export interface UserSubmissionType {
  language: string;
  filepath: string;
  startedAt: string;
  completedAt: string;
  verdict: string;
  submittedAt: string;
  userId: UserType;
  problemId: PropblemDetailType;
  status: string;
}
