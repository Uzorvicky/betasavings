import { ProgressSpinner } from 'primereact/progressspinner';
import React from "react";
export default function Spinner() {
    return (
      <ProgressSpinner style={{width: '50px', height: '50px'}} aria-label="Loading" strokeWidth="6" fill="var(--surface-ground)"  />
    );
  }
  