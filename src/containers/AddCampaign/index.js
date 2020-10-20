import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';

const AddCampaign = ({ open }) => {

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="confirmation-dialog-title"
            open={open}

        >
            <div style={{
                height: '926px',
                width: '1345px'
            }}>
            </div>
        </Dialog>
    )
};

export default AddCampaign;