import { SearchOutlined } from '@ant-design/icons';
import { Modal, NotificationArgsProps } from 'antd';
import {
  Button,
  Checkbox,
  DatePicker,
  DatePickerProps,
  Divider,
  Flex,
  GetProps,
  Input,
  InputNumber,
  notification,
  Select,
  Tooltip
} from 'antd';
import React, { useMemo, useState } from "react";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
type NotificationPlacement = NotificationArgsProps['placement'];

const Context = React.createContext({ name: 'Default' });


function AntDesign() {

  const { RangePicker } = DatePicker;

  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Divider orientation="left" plain>
        Button
      </Divider>
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined/>}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined/>}/>
          </Tooltip>
          <Button icon={<SearchOutlined/>}>
            Search
          </Button>
        </Flex>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined/>}/>
          </Tooltip>
          <Button icon={<SearchOutlined/>} type="text">
            Search
          </Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined/>}/>
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined/>}>
            Search
          </Button>
          <Button icon={<SearchOutlined/>} href="https://www.google.com"/>
          <Button type="primary" loading>
            Loading
          </Button>
        </Flex>
      </Flex>

      <Divider orientation="left" plain>
        DatePicker
      </Divider>
      <Flex gap="small" vertical>
        <DatePicker/>
        <DatePicker picker="month"/>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value, dateString) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
          }}
          onOk={onOk}
        />
      </Flex>

      <Divider orientation="left" plain>
        CheckBox
      </Divider>
      <Flex gap="small" vertical>
        <Checkbox>Checkbox</Checkbox>
      </Flex>

      <Divider orientation="left" plain>
        Input
      </Divider>
      <Flex gap="small" vertical>
        <Input placeholder="Basic usage"/>
        <InputNumber<number>
          style={{ width: '100%' }}
          defaultValue={1000}
          formatter={(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
        />
      </Flex>

      <Divider orientation="left" plain>
        Select
      </Divider>
      <Flex gap="small" vertical>
        <Select
          defaultValue="lucy"
          style={{ width: '100%' }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </Flex>

      <Divider orientation="left" plain>
        Notification
      </Divider>
      <Flex gap="small" vertical>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
        >
          Show Notification
        </Button>
      </Flex>

      <Divider orientation="left" plain>
        Modal
      </Divider>
      <Flex gap="small" vertical>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Flex>
    </ Context.Provider>
  );
}

export default AntDesign;
