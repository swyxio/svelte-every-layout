interface Instance {
	el: HTMLElement
	id: string,
	styleEl: HTMLStyleElement,
	props: {},
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

	onPropsUpdate (instance: Instance, props) {
		instance.props = props
		const newId = this.generateId(instance.name, instance.props)

		if (instance.id === newId) return

		const oldIdInstances = this.getInstancesById(instance.id)
		const newIdInstances = this.getInstancesById(newId)
		const create = newIdInstances.length === 0
		const remove = oldIdInstances.length === 1

		this.setIdOnEl(instance.el, newId)
		instance.id = this.generateId(instance.name, instance.props)

		if (remove) instance.styleEl.remove()
		if (create) {
			instance.styleEl = this.generateStyleEl(instance.styleFn(instance), newId)
			document.head.appendChild(instance.styleEl)
		}
		else instance.styleEl = newIdInstances[0].styleEl
	}

	setIdOnEl (el: HTMLElement, id: string) {
		el.dataset.id = id
	}

	mount (instance: Instance) {
		instance.id = this.generateId(instance.name, instance.props)
		this.setIdOnEl(instance.el, instance.id)
		const existingIdInstances = this.getInstancesById(instance.el.dataset.id)

		if (existingIdInstances.length) instance.styleEl = existingIdInstances[0].styleEl
		else {
			instance.styleEl = this.generateStyleEl(instance.styleFn(instance), instance.id)
			document.head.appendChild(instance.styleEl)
		}

		this.instances.push(instance)

		return instance
	}

	destroy (instance: Instance) {
		this.instances = this.instances.filter(inst => inst.id !== instance.id)
		if (this.getInstancesById(instance.el.dataset.id).length === 0) instance.styleEl.remove()
	}

	generateStyleEl (innerHTML: string, id: string) {
		const styleEl = document.createElement('style')
		styleEl.id = id
		styleEl.innerHTML = innerHTML
		return styleEl
	}

	getInstancesById (id: string) {
		return this.instances.filter(inst => inst.el.dataset.id === id)
	}

	generateId (name: string, props) {
		return [name, ...Object.values(props)]
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
