import * as React from 'react';
import { Badge } from './Badge';
import { CodeBlock } from './CodeBlock';
import { JsTagProps } from './JsTag';
import { Parameters } from './Parameters';

export interface MethodDoc {
  tag: string;
  signature: string;
  example: string;
  args: JsTagProps[];
  returns: JsTagProps;
}

export interface FnDocProps {
  name: string;
  description: string;
  methods: MethodDoc[];
}

export function FnDoc(props: FnDocProps) {
  const { name, description, methods } = props;
  return (
    <div className="card mb-3">
      <a id={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="card-text">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {methods.map((method, i) => {
            const { args, returns, tag, signature, example } = method;
            return (
              <div key={i}>
                <div>
                  <Badge>{tag}</Badge>
                </div>
                <CodeBlock type="light" code={signature} />
                <Parameters args={args} returns={returns} />
                <CodeBlock type="dark" code={example} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}