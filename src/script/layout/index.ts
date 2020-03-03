interface Instance {
	el: HTMLElement
	id: string,
	styleEl: HTMLStyleElement,
	props: {
		[P: string]: any
	},
	name: string,
	styleFn: (instance: this) => string
}

export class EveryLayout {
	instances: Array<Instance>
	instanceIdCount: number

	constructor () {
		this.instances = []
		this.instanceIdCount = 0
	}

	onPropsUpdate (instance: Instance, props: typeof instance.props) {
		instance.props = props
		const newId = this.generateId(instance)

		if (instance.id === newId) return

		const oldIdInstances = this.getInstancesById(instance.id)
		const newIdInstances = this.getInstancesById(newId)
		const create = newIdInstances.length === 0
		const remove = oldIdInstances.length === 1

		this.setId(instance, newId)

		if (remove) instance.styleEl.remove()
		if (create) this.createStyleEl(instance)
		else instance.styleEl = newIdInstances[0].styleEl
	}

	setId (instance: Instance, id: string) {
		instance.id = id
		instance.el.dataset.id = id
	}

	mount (instance: Instance) {
		this.setId(instance, this.generateId(instance))

		const existingIdInstances = this.getInstancesById(instance.id)

		if (existingIdInstances.length) instance.styleEl = existingIdInstances[0].styleEl
		else this.createStyleEl(instance)

		this.instances.push(instance)

		return instance
	}

	destroy (instance: Instance) {
		this.instances = this.instances.filter(inst => inst.id !== instance.id)
		this.getInstancesById(instance.id).length === 0 && instance.styleEl.remove()
	}

	createStyleEl (instance: Instance) {
		instance.styleEl = document.createElement('style')
		instance.styleEl.id = instance.id
		instance.styleEl.innerHTML = instance.styleFn(instance)
		document.head.appendChild(instance.styleEl)
	}

	getInstancesById (id: string) {
		return this.instances.filter(inst => inst.el.dataset.id === id)
	}

	generateId (instance: Instance) {
		return [instance.name, ...Object.values(instance.props)]
			.map(v => String(v).replace(/[^a-zA-Z0-9-_]/g, '_'))
			.join('-')
	}
}

export { default as Box } from './box.svelte'
export { default as Center } from './center.svelte'
export { default as Cluster } from './cluster.svelte'
export { default as Cover } from './cover.svelte'
export { default as Frame } from './frame.svelte'
export { default as Grid } from './grid.svelte'
export { default as Reel } from './reel.svelte'
export { default as Sidebar } from './sidebar.svelte'
export { default as Stack } from './stack.svelte'
export { default as Switcher } from './switcher.svelte'
export { default as Imposter } from './imposter.svelte'
