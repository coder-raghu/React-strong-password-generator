import React, { useEffect, useState } from 'react'
import { Form, Row, Col, InputGroup, Stack } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const PasswordGenerator = () => {
    
    const [password, setPassword] = useState("asdasd");
    const [passwordLength, setPasswordLength] = useState(12);
    const [useSymbols, setUseSymbols] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useLowerCase, setUseLowerCase] = useState(true);
    const [useUpperCase, setUseUpperCase] = useState(true);

    const generatePassword = () => {
        let charset = "";
        let newPassword = "";
 
        if (useSymbols) charset += "!@#$%^&*()";
        if (useNumbers) charset += "0123456789";
        if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
        for (let i = 0; i < passwordLength; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
 
        setPassword(newPassword);
    };
    useEffect(() => {
        generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passwordLength, useSymbols, useNumbers, useLowerCase, useUpperCase])
    

    return (
        <Form>
            <Row>
                <Col md={12}>
                    <h3 className='text-center my-5'>Password Generator</h3>
                </Col>               
                <Col md={{ span: 6, offset: 3 }} className='text-center'>
                    <Form.Check
                        inline
                        label="Symbols"
                        name="group1"
                        type="checkbox"
                        id={`symbols`}
                        checked={useSymbols}
                        onChange={()=>{setUseSymbols(!useSymbols)}}
                    />
                    <Form.Check
                        inline
                        label="Numbers"
                        name="group1"
                        type="checkbox"
                        id={`numbers`}
                        checked={useNumbers}
                        onChange={()=>{setUseNumbers(!useNumbers)}}
                    />
                    <Form.Check
                        inline
                        label="LowerCase"
                        name="group1"
                        type="checkbox"
                        id={`lowerCase`}
                        checked={useLowerCase}
                        onChange={()=>{setUseLowerCase(!useLowerCase)}}
                    />
                    <Form.Check
                        inline
                        label="UpperCase"
                        name="group1"
                        type="checkbox"
                        id={`upperCase`}
                        checked={useUpperCase}
                        onChange={()=>{setUseUpperCase(!useUpperCase)}}
                    />
                </Col>
                <Col md={{ span: 6, offset: 3 }} className='mt-3'>
                    <Stack direction="horizontal" gap={3}>
                        <RangeSlider
                            value={passwordLength}
                            onChange={changeEvent => setPasswordLength(changeEvent.target.value)}
                            min={6} max={100} 
                            />
                        <Form.Control
                            type="number"
                            id="length"
                            min={6}
                            max={100}
                            value={passwordLength}
                            onChange={changeEvent => setPasswordLength(changeEvent.target.value)}
                            className='ms-auto w-25'
                        />
                    </Stack>
                </Col>
                <Col md={{ span: 6, offset: 3 }} className='mt-3'>      
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="password"                    
                            aria-describedby="basic-addon2"
                            readOnly
                            value={password}
                        />
                        <InputGroup.Text id="basic-addon2">
                        <CopyToClipboard className="cursorPointer" text={password} onCopy={() => {
                            toast.success("Text copied.")
                        }}>
                            <span >Copy</span>
                        </CopyToClipboard>
                        </InputGroup.Text>
                    </InputGroup>           
                </Col>               
            </Row>
        </Form>
    )
}

export default PasswordGenerator