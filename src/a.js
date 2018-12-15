import React from "react";
import { Button, Select, DatePicker } from "antd";
import moment from "moment";
import axios from "axios";
import "./App.css";
import Context from "./context";

const Option = Select.Option;

const aa = axios.get;
console.log(aa);

class A extends React.Component {
	static contextType = Context;

	render() {
		console.log(this.context);
		return (
			<div>
				<DatePicker
					dateRender={current => {
						const style = {};
						if (current.date() === 1) {
							style.border = "1px solid #1890ff";
							style.borderRadius = "50%";
						}
						return (
							<div className="ant-calendar-date" style={style}>
								{current.date()}
							</div>
						);
					}}
				/>
				{moment().format("llll")}
				aaa<Button>bbb</Button>
				<Select defaultValue="lucy" style={{ width: 120 }}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="disabled" disabled>
						Disabled
					</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
			</div>
		);
	}
}

export default A;
