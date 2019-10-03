import React from 'react';
import Input from '../input/input';
import classes from '../helpers/classes';

import './form.scss';

export interface FormValue {
  [key: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: React.ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [key: string]: string[] };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误';
  };
  return (
    <form onSubmit={onSubmit}>
      <table className="bd-form-table">
        <tbody>
        {props.fields.map(f =>
          <tr className={classes('bd-form-tr')} key={f.name}>
            <td className="bd-form-td">
              <span className="bd-form-label">{f.label}</span>
            </td>
            <td className="bd-form-td">
              <Input
                className="bd-form-input"
                type={f.input.type}
                value={formData[f.name]}
                onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div className="bd-form-error">
                {
                  props.errors[f.name] ?
                    (props.errorsDisplayMode === 'first' ?
                      transformError!(props.errors[f.name][0]) : props.errors[f.name].map(transformError!).join()) :
                    <span>&nbsp;</span>
                }
              </div>
            </td>
          </tr>
        )}
        <tr className='bd-form-tr'>
          <td className="bd-form-td"/>
          <td className="bd-form-td">{props.buttons}</td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: 'first'
};

export default Form;