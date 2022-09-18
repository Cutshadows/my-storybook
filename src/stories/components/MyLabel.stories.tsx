import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "./MyLabel";

export default {
	title: 'example/Label',
	component: MyLabel,
	argTypes: {
		label: { control: 'text' },
		size: { control: {
			type: 'select',
			options: ['normal', 'h1', 'h2', 'h3'],
		}},
		color: { control: {
			type: 'select',
			options: ['primary', 'secondary', 'tertiary']
		}},
		fontColor: { control: 'color' },
		allCaps: { control: 'boolean' , active: false}
	}
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel  {...args}/>;

export const Basic = Template.bind({});
// Basic.args = {
// 	size: 'normal',
// 	label: 'Basic'
// }
Basic.args = {
	size: 'normal',
	allCaps: false
}
export const AllCaps = Template.bind({});
// AllCaps.args = {
// 	size: 'h1',
// 	label: 'Allcaps',
// };
AllCaps.args = {
	size: 'secondary',
	color: 'secondary',
	allCaps: true
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'h2',
	label: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	size: 'normal',
	fontColor: '#7d97c2'
}
