import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import Episode from '../../../types/Episode';

interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    episode: Episode;
  }

const SimpleDialog = (props: SimpleDialogProps) => {
    const { onClose, episode, open } = props;

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogActions onMouseDown={onClose}>
                Close
            </DialogActions>
            <DialogTitle>
                Additional episode information
            </DialogTitle>
            <DialogContent>
                <Typography>It was made by director: {episode.moreDetails.director}</Typography>
            </DialogContent>   
      </Dialog>
    );
};

export default SimpleDialog;
