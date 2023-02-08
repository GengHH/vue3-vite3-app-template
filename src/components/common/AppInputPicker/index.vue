<!--
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-16 21:55:21
 * @LastEditors: GengHH
 * @LastEditTime: 2023-02-06 16:09:39
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\components\common\AppInputPicker\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="input-field-packer flex-ac">
		<van-field
			v-bind="attrs"
			v-model="realValue"
			is-link
			readonly
			@click="click"
			input-align="right"
			:class="{ dateType: pickType === 'calendar' || pickType === 'datetime' }"
		/>
		<van-popup v-if="pickType === 'select'" v-model:show="showPicker" position="bottom">
			<van-picker
				:columns="realColumns as any"
				:default-index="activeIndex"
				@confirm="onConfirm"
				@cancel="showPicker = false"
			/>
		</van-popup>
		<van-calendar
			v-if="pickType === 'calendar'"
			v-model:show="showPicker"
			:show-confirm="false"
			v-bind="attrs"
			@select="onConfirm"
		/>
		<van-popup v-if="pickType === 'datetime'" v-model:show="showPicker" position="bottom">
			<van-datetime-picker
				type="date"
				v-model="currentDate"
				v-bind="attrs"
				@confirm="onConfirm"
				@cancel="showPicker = false"
				:formatter="formatter"
			/>
		</van-popup>
	</div>
</template>

<script setup lang="ts">
	import { PickerColumn, PickerOption } from 'vant';
	import { DicMetaType, transformSlashTime } from '../../../utils';
	// import { transformTime } from '@/utils';
	const activeIndex = ref<number>(0);
	// 绑定父组件的attrs
	const attrs = useAttrs() || ref({});
	// let pickerAttrs = ref({});
	// watch(attrs, (newAttrs) => {
	// 	console.log('%c Line:54 🍬 typeof newAttrs', 'color:#42b983', typeof newAttrs);
	// 	pickerAttrs = newAttrs;
	// 	if (typeof newAttrs === 'object' && Object.keys(newAttrs as object).length > 0) {
	// 		let keys = Object.keys(newAttrs as object).filter((x: string) => {
	// 			return /^picker/.test(x);
	// 		});
	// 		pickerAttrs = getTargetObject((newAttrs as Record<string, any>) || {}, keys || []);
	// 	}
	// });
	/**
	 * 父子组件数据双向绑定dicStore
	 */
	/**
	 * TODO 选择器的类型
	 **/
	// enum PickType {
	// 	select = 'select',
	// 	calendar = 'calendar',
	// 	date = 'date',
	// 	area = 'area',
	// }

	// const minDate = new Date(1960, 1, 1);

	interface PropsType {
		columns?: (PickerOption | PickerColumn)[] | undefined;
		dicArray?: DicMetaType[] | undefined;
		pickType?: string;
		modelValue: any;
		dicValue?: any;
	}
	// 默认props
	const props = withDefaults(defineProps<PropsType>(), {
		columns: undefined,
		dicArray: undefined,
		pickType: 'select',
		modelValue: '',
		dicValue: '',
	});
	// 自定义列类型
	// const customFieldName = {
	// 	text: 'label',
	// 	values: 'value',
	// };
	//{
	// modelValue: {
	// 	type: String,
	// 	default: '',
	// },
	// pickType: { type: String as PropType<PickType>, default: 'select', required: true },
	// pickType: { type: String, default: 'select', required: true },
	// columns: { type: Array, default: () => [], required: false },
	// fileValue: { type: String, required: true },
	// name: { type: String, default: 'picker', required: false },
	// label: { type: String, default: '选择器', required: false },
	// placeholder: { type: String, default: '点击选择城市', required: false },
	//}
	const emit = defineEmits(['update:modelValue', 'update:dicValue', 'change']);
	const showPicker = ref(false);
	// 根据传入的columns 或者 字典数据，计算新的picker Columns
	const realColumns = computed(() => {
		if (props.columns) {
			return [...props.columns];
		} else if (props.dicArray) {
			return props.dicArray.map((item) => {
				return item.text || item.label;
			});
		} else {
			return [];
		}
	});

	const realValue = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit('update:modelValue', value);
			emit('change', value);
			// TODO 不使用定时器的话不能读到props的值（待优化）
			setTimeout(() => {
				if (!props.columns && props.dicArray) {
					emit('update:dicValue', props.dicArray[activeIndex.value]?.value || []);
				}
			}, 500);
		},
	});
	const currentDate = computed({
		get() {
			if (props.modelValue) {
				let d = props.modelValue.split('-');
				if ((attrs as any).type === 'year-month') {
					return new Date(Number(d[0]), Number(d[1]) - 1);
				} else {
					return new Date(Number(d[0]), Number(d[1]) - 1, Number(d[2]));
				}
			}
		},
		set(value) {
			return value;
		},
	});
	//默认选中的索引-不使用定时器的话不能读到props的值（待优化）
	setTimeout(() => {
		if (props.pickType === 'select' && realValue.value) {
			const index = realColumns.value.findIndex((i) => {
				return i === realValue.value;
			});
			activeIndex.value = index;
		}
	}, 500);

	// 点击选择框，显示选择对象的弹出框
	const click = () => {
		if (attrs.readonly || attrs.readonly === '') {
			showPicker.value = false;
		} else {
			showPicker.value = true;
		}
	};
	/**
	 * 选中参数
	 **/
	const onConfirm = (value: any, index: number) => {
		if (typeof value === 'object' && value instanceof Date) {
			if ((attrs as any).type === 'year-month') {
				realValue.value = transformSlashTime(value, '-').substring(0, 7) || '';
			} else {
				realValue.value = transformSlashTime(value, '-') || '';
			}
		} else {
			realValue.value = value;
			activeIndex.value = index;
		}
		showPicker.value = false;
	};
	const formatter = (type: any, val: any) => {
		if (type === 'year') {
			return `${val}年`;
		}
		if (type === 'month') {
			return `${Number(val)}月`;
		}
		if (type === 'day') {
			return `${val}日`;
		}
		return val;
	};
</script>
<style lang="less" scoped>
	.input-field-packer {
		.dateType {
			:deep(.van-icon-arrow::before) {
				content: '\e67e';
				color: @gold;
			}
		}
		&[readonly] {
			.dateType {
				:deep(.van-icon-arrow::before) {
					color: @grey-one;
				}
			}
		}
	}
</style>
