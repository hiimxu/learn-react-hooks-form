import React from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    FormHelperText,
    FormControl,
} from '@mui/material';
import { styled } from '@mui/system';

import { useForm } from 'react-hook-form';

const Wrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(-135deg,#c850c0,#4158d0)',
});

const Card = styled(Box)({
    width: 660,
    borderRadius: 10,
    background: '#fff',
});

const CardHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'whitesmoke',
    borderRadius: '10px 10px 0 0 ',
});

const HeaderText = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 700,
});

const CardBody = styled('form')({
    dispaly: 'flex',
    justifyContent: 'center',
    padding: '40px 80px 80px 80px',
});

const Item = styled(Box)({
    width: '100%',
    padding: '10px 0',
});

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <HeaderText>Login</HeaderText>
                </CardHeader>
                <CardBody onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error fullWidth>
                        <Item>
                            {' '}
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="standard"
                                aria-describedby="component-error-text"
                                label="Username"
                                error={Boolean(errors?.username)}
                                {...register('username', {
                                    required: true,
                                    maxLength: 10,
                                })}
                            />
                            <FormHelperText id="component-error-text">
                                {errors.username?.type === 'required' &&
                                    'Username is required!'}
                                {errors.username?.type === 'maxLength' &&
                                    'Username must be less than 10 character!'}
                            </FormHelperText>
                        </Item>
                        <Item>
                            <TextField
                                fullWidth
                                type="password"
                                margin="dense"
                                variant="standard"
                                label="Password"
                                error={Boolean(errors.password)}
                                {...register('password', {
                                    required: true,
                                    pattern:
                                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/i,
                                })}
                            />
                            <FormHelperText id="component-error-text">
                                {errors.password?.type === 'required' &&
                                    'Password is required!'}
                                {errors.password?.type === 'pattern' &&
                                    'Password must be 8 to 40 character!'}
                            </FormHelperText>
                        </Item>
                        <Item>
                            <Button fullWidth type="submit" variant="contained">
                                Login
                            </Button>
                        </Item>
                    </FormControl>
                </CardBody>
            </Card>
        </Wrapper>
    );
}
export default React.memo(Login);
