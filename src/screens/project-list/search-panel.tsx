import { Form, Input, Select } from "antd";
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  origanization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps['params']) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const {users, params, setParams} = props;

  return (
    <Form layout="inline" style={{marginBottom: '2rem'}}>
      <Form.Item>
        <Input placeholder="项目名" type="text" value={params.name} onChange={e => setParams({
          ...params,
          name: e.target.value
        })}/>
      </Form.Item>
      <Form.Item>
        <Select value={params.personId} onChange={value => setParams({
          ...params,
          personId: value
        })}>
          <Select.Option value="">负责人</Select.Option>
          {
            users.map(user => <Select.Option key={user.id} value={user?.id}>{user?.name}</Select.Option>)
          }
        </Select>
      </Form.Item>
    </Form>
  )
}
