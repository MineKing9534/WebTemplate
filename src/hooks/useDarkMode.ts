import { useState } from "react";

export function useDarkMode() {
	const [ state, setState ] = useState(true)

	return {
		darkMode: state,
		setDarkMode: (state: boolean) => setState(state),
	}
}