
export const getMouseXYForElement = e => {

	const  x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

	return { x, y };
};

export const getRelativeMouseXY = e => {

	const { width, height } = e.target.getBoundingClientRect();

	const  x = (e.pageX - e.target.offsetLeft) / width
    const y = (e.pageY - e.target.offsetTop) / height


	return { x, y };

}
