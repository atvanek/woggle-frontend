'use client';

import { useRootDispatch } from '@/redux/hooks';
import { resetBoard } from '@/redux/slices/gameSlice';
import { Button } from '@mui/material';

function ResetButton() {
	const dispatch = useRootDispatch();
	return (
		<Button
			color='secondary'
			variant='contained'
			sx={{ margin: 15 + 'px' }}
			onClick={() => dispatch(resetBoard())}>
			Reset
		</Button>
	);
}

export default ResetButton;
